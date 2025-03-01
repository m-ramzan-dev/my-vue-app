import 'dotenv/config'; // Loads .env variables in ESM
import { faker } from '@faker-js/faker/locale/en_US'; // Faker with en_US locale
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
console.log('supabase', supabase);

const seedProjects = async (n) => {
    for(let i = 0; i < n; i++) {
        const name = faker.lorem.words(3);
    
        const { data, error } = await supabase.from('projects').insert({
            name: name,
            slug: name.toLowerCase().replaceAll(' ', '-'),
            status: faker.helpers.arrayElement(['in-progress', 'completed']),
            collaborators: faker.helpers.arrayElements([1, 2, 3]),
        });
        console.log('Insert result:', data, error);
    }
    
};

seedProjects(10).catch(console.error);