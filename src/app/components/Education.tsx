import React from 'react'
import { education } from '../constants'

export default function Education() {
    return (
        <section className="bg-gray-900 py-8 md:py-14" id="education">
            <div className="container mx-auto">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-center w-full mb-10">
                        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl text-white">Education</h2>
                        <p className="mb-6 text-lg font-normal lg:text-xl text-gray-400">Journey of Education Path</p>
                    </div>

                    <div className="flex items-center flex-col justify-center">
                        <ol className="relative border-s border-gray-700">
                            {
                                education.map((edu) => (
                                    <li className="mb-10 ms-6" key={edu.id}>
                                        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                                            <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </span>
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{edu.school} {edu.running && <span className="bg-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded text-blue-900 ms-3">Running</span>}</h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{edu.degree}</time>
                                        <p className="mb-4 text-base font-normal text-gray-400">{edu.desc}</p>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>


    )
}
