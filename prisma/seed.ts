import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '132776d8-05ac-49dd-83c5-d6a06f033f8d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs',
            maximumAttendees: 120,

        }
    })    
}

seed().then(()=> {
    console.log('Database seeded!');
    prisma.$disconnect();
})