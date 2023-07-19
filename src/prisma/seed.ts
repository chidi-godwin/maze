import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const filePath = path.join(__dirname, 'clubs_list.csv');

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', async (row: any) => {
      await prisma.club.create({
        data: {
          title: row.title,
          address: row.address,
          phone: row.phone || null,
          rating: row.rating ? parseFloat(row.rating) : null,
          category: row.category || null,
          logo: row.logo || null,
          website: row.website || null,
          html_logo: row.html_logo || null,
          keyword: row.keyword,
          location: row.location,
        },
      });
    })
    .on('end', () => {
      console.log('Seed completed.');
      prisma.$disconnect();
    });
}

seed().catch((error) => {
  console.error('Error seeding data:', error);
  prisma.$disconnect();
});
