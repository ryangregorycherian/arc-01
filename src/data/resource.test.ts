   /**
    * ARC-01 — The Lantern Archive
    * Maintained by CSI VIT Chennai Technical Team
    */
   import { existsSync, statSync } from 'node:fs'
   import { join } from 'node:path'
   import { describe, expect, it } from 'vitest'
   import { resources } from './resources'

   describe('resource catalogue data', () => {
     it.each(resources)('$title points to a real, non-empty file', (resource) => {
       const filePath = join(process.cwd(), 'public', resource.file)

       expect(existsSync(filePath), `${resource.file} does not exist`).toBe(true)
       expect(statSync(filePath).size).toBeGreaterThan(0)
     })

     it('gives every resource a unique slug and file', () => {
       expect(new Set(resources.map((r) => r.slug)).size).toBe(resources.length)
       expect(new Set(resources.map((r) => r.file)).size).toBe(resources.length)
     })
   })