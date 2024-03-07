import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Goa Adventure',

  projectId: 'zafp30ka',
  dataset: 'production',

  plugins: [structureTool({}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
