drop table if exists projects;

drop type if exists status;

create type status as enum ('in-progress', 'completed');

create table projects (
    id bigint primary key generated always as identity not null,
    name text not null,
    slug text unique not null,
    status status not null,
    created_at timestamp with time zone default now() not null,
    collaborators text[] default '{}'::text[] not null
);