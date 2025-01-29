import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { createClient } from 'next-sanity'

dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-02-25',
  token: process.env.SANITY_SEED_TOKEN!,
  useCdn: false,
})

// Get the absolute path to the images directory
const imagesDir = path.join(__dirname, 'images', 'speakers')

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
  console.error(`Images directory not found: ${imagesDir}`)
  process.exit(1)
}

const speakers = [
    // {
    //   name: 'Jesper Kouthoofdt',
    //   title: 'HEAD OF DESIGN & CHIEF EXECUTIVE OFFICER AT TELENET EXPERIENCE',
    //   pronouns: 'he/him',
    //   imageName: 'jesper-kouthoofdt.jpg'
    // },
    // {
    //   name: 'Karla Mickens Cole',
    //   title: 'PRODUCT DESIGNER & BRAND LEAD AT THE BROWSER COMPANY',
    //   pronouns: 'she/her',
    //   imageName: 'karla-mickens-cole.jpg'
    // },
    {
      name: 'Jenny Arden',
      title: 'CHIEF DESIGN OFFICER AT ZILLOW',
      pronouns: 'she/her',
      imageName: 'jenny-arden.jpg'
    },
    {
      name: 'Imran Chaudhri',
      title: 'PRESIDENT & CHIEF DESIGNER AT HUMANE',
      pronouns: 'he/him',
      imageName: 'imran-chaudhri.jpg'
    },
    {
      name: 'Refik Anadol',
      title: 'DIRECTOR AT REFIK ANADOL STUDIOS',
      pronouns: 'he/him',
      imageName: 'refik-anadol.jpg'
    },
    {
      name: 'Neha Batra',
      title: 'VICE PRESIDENT OF ENGINEERING AT GITHUB',
      pronouns: 'she/her',
      imageName: 'neha-batra.jpg'
    },
    {
      name: 'Alexis Gay',
      title: 'COMEDIAN',
      pronouns: 'she/her',
      imageName: 'alexis-gay.jpg'
    },
    {
      name: 'Josh Wardle',
      title: 'ARTIST & SOFTWARE ENGINEER AT SIRANO INDUSTRIES, CREATOR OF WORDLE',
      pronouns: 'he/him',
      imageName: 'josh-wardle.jpg'
    },
    {
      name: 'Aravind Srinivas',
      title: 'CHIEF EXECUTIVE OFFICER & CO-FOUNDER AT PERPLEXITY AI',
      pronouns: 'he/him',
      imageName: 'aravind-srinivas.jpg'
    },
    {
      name: 'Jessica Hische',
      title: 'LETTERING ARTIST AT JESSICA HISCHE INC.',
      pronouns: 'she/her',
      imageName: 'jessica-hische.jpg'
    },
    {
      name: 'Claire Vo',
      title: 'CHIEF PRODUCT OFFICER AT LAUNCHDARKLY',
      pronouns: 'she/her',
      imageName: 'claire-vo.jpg'
    },
    {
      name: 'Lenny Rachitsky',
      title: 'AUTHOR AT LENNY\'S PODCAST || LENNY\'S NEWSLETTER',
      pronouns: 'he/him',
      imageName: 'lenny-rachitsky.jpg'
    },
    {
      name: 'Reginé Gilbert',
      title: 'JAMES WELDON JOHNSON PROFESSOR AT NEW YORK UNIVERSITY',
      pronouns: 'she/her',
      imageName: 'regine-gilbert.jpg'
    },
    {
      name: 'Andy Allen',
      title: 'SOFTWARE DESIGNER AT ISIORG',
      pronouns: 'he/him',
      imageName: 'andy-allen.jpg'
    },
    {
      name: 'Jason Ballard',
      title: 'CEO & CO-FOUNDER AT ICON',
      pronouns: 'he/him',
      imageName: 'jason-ballard.jpg'
    },
    {
      name: 'Saron Yitbarek',
      title: 'CREATOR AT NOT A DESIGNER',
      pronouns: 'she/her',
      imageName: 'saron-yitbarek.jpg'
    },
    {
      name: 'Hongyi Li',
      title: 'DIRECTOR AT OPEN GOVERNMENT PRODUCTS',
      pronouns: 'he/him',
      imageName: 'hongyi-li.jpg'
    },
    {
      name: 'Diana Mounter',
      title: 'HEAD OF DESIGN AT STYTCH',
      pronouns: 'she/her',
      imageName: 'diana-mounter.jpg'
    },
    {
      name: 'Kevin Systrom',
      title: 'FORMER CEO AT INSTAGRAM, CEO AT ARTIFACT',
      pronouns: 'he/him',
      imageName: 'kevin-systrom.jpg'
    },
    {
      name: 'Oliver Sommermann',
      title: 'UX/RESEARCHER AT ABLETON',
      pronouns: 'he/him',
      imageName: 'oliver-sommermann.jpg'
    },
    {
      name: 'Pablo Sánchez',
      title: 'PRINCIPAL DESIGNER AT ABLETON',
      pronouns: 'he/him',
      imageName: 'pablo-sanchez.jpg'
    },
    {
      name: 'Ovetta Sampson',
      title: 'DIRECTOR OF UX MACHINE LEARNING AT GOOGLE',
      pronouns: 'she/her',
      imageName: 'ovetta-sampson.jpg'
    },
    {
      name: 'Mike Stern',
      title: 'DESIGN EVANGELISM MANAGER AT APPLE',
      pronouns: 'he/him',
      imageName: 'mike-stern.jpg'
    },
    {
      name: 'Linda Dong',
      title: 'DESIGN EVANGELIST AT APPLE',
      pronouns: 'she/her',
      imageName: 'linda-dong.jpg'
    }
  ]
  
  async function uploadImage(imagePath: string) {
    try {
      const imageData = fs.readFileSync(imagePath)
      const imageAsset = await client.assets.upload('image', imageData)
      return {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      }
    } catch (error) {
      console.error(`Error uploading image ${imagePath}:`, error)
      return null
    }
  }
  
  async function importSpeakers() {
  
    for (const speaker of speakers) {
      try {
        // Upload the image
        const imagePath = path.join(imagesDir, speaker.imageName)
        const imageAsset = await uploadImage(imagePath)
  
        if (!imageAsset) {
          console.error(`Skipping speaker ${speaker.name} due to image upload failure`)
          continue
        }
  
        // Create the speaker document
        const speakerDoc = {
          _type: 'speaker',
          name: speaker.name,
          pronouns: speaker.pronouns,
          title: speaker.title,
          image: imageAsset
        }
  
        // Create the document in Sanity
        const result = await client.create(speakerDoc)
        console.log(`Created speaker: ${speaker.name} - ${result._id}`)
      } catch (error) {
        console.error(`Error creating speaker ${speaker.name}:`, error)
      }
    }
  }
  
  // Run the import
  importSpeakers()
    .then(() => console.log('Import completed'))
    .catch(err => console.error('Import failed:', err))