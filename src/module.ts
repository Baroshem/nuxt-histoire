import fs from 'fs'
import { defineNuxtModule } from '@nuxt/kit'
import { histoireConfigFileTemplate } from './templates'
// import type { HistoireConfig } from '@histoire/shared';

export interface ModuleOptions {
  disabled?: boolean;
  // configuration?: HistoireConfig; // Add this later
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-histoire',
    configKey: 'histoire'
  },
  defaults: {
    disabled: false,
    // configuration: {} as HistoireConfig,
  },
  setup (options, nuxt) {
    if (options.disabled) return;

    const rootDir = nuxt.options.rootDir

    const histoireConfigPath = rootDir + '/histoire.config.ts'

    // Object.keys(options.configuration).length > 0 ||
    if (!fs.existsSync(histoireConfigPath)) {

      fs.writeFileSync(`${rootDir}/histoire.config.ts`, histoireConfigFileTemplate)
      // Consider adding histoire.config.ts file to .gitignore.
    }
  }
})
