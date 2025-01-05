'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { BiLogoCPlusPlus, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { FaRust } from 'react-icons/fa6'
import { SiDart, SiFlutter, SiGo, SiNextdotjs, SiNuxtdotjs, SiPrisma, SiVuedotjs } from 'react-icons/si'

interface Skill {
  name: string
  category: string
  proficiency: number
  icon: React.ReactElement<any>
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    category: 'Languages',
    proficiency: 95,
    icon: <BiLogoJavascript className="fill-yellow-400" />
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    proficiency: 90,
    icon:  <BiLogoTypescript className="fill-blue-400" />
  },
  {
    name: 'Rust',
    category: 'Languages',
    proficiency: 50,
    icon:   <FaRust className="fill-orange-400" />
  },
 {
    name: 'C++',
    category: 'Languages',
    proficiency: 60,
    icon:  <BiLogoCPlusPlus className="fill-blue-400" />
  },
  {
    name: 'Dart',
    category: 'Languages',
    proficiency: 80,
    icon:  <SiDart className="fill-blue-400" />
  },
   {
    name: 'Go',
    category: 'Languages',
    proficiency: 80,
    icon:  <SiGo className="fill-blue-400" />
  },
  {
    name: 'Python',
    category: 'Languages',
    proficiency: 85,
    icon:  <BiLogoPython className="fill-gray-400" />
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    icon:<BiLogoReact className="fill-blue-400" />
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    proficiency: 90,
    icon: <SiNextdotjs className="fill-green-500" />
  },
   {
    name: 'Vue.js',
    category: 'Frontend',
    proficiency: 90,
    icon: <SiVuedotjs className="fill-green-500" />
  },
   {
    name: 'Nuxt.js',
    category: 'Frontend',
    proficiency: 90,
    icon: <SiNuxtdotjs className="fill-green-500" />
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    proficiency: 80,
    icon:<SiFlutter className="fill-blue-400" />
  },
  {
    name: 'Prisma',
    category: 'Backend',
    proficiency: 80,
    icon:  <SiPrisma className="fill-white rounded p-1 bg-blue-500" />
  }
]

const categories = Array.from(new Set(skills.map(skill => skill.category)))

export function Skills() {
  return (
    <section className="snap-start py-20 px-4 bg-black/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-4xl text-primary">
          Skills
        </h2>
        <div className="grid gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-500">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="p-4 bg-black/50 border border-green-500/20 hover:border-green-500/40 transition-colors rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 relative flex items-center justify-center">
                            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">{skill.icon}</span>
                            </div>
                            <div 
                              className="absolute inset-0 border border-green-500/20 rounded-lg" 
                              style={{
                                background: `conic-gradient(from 0deg, rgb(34 197 94 / 0.2) ${skill.proficiency}%, transparent ${skill.proficiency}%)`
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-green-500">{skill.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-1.5 w-24 bg-black/50 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                />
                              </div>
                              <span className="text-xs text-green-500/80">
                                {skill.proficiency}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

