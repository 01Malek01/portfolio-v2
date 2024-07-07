import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function ProjectCard({ projectTitle, projectDescription, projectImage, githubLink, liveLink, styles }) {
  return (
    <div className={`${styles} bg-base-100 md:w-96 w-72 shadow-xl hover:scale-110 hover:z-10
    transition duration-300 ease-in-out`}>
      <div className="card-body">
        <h2 className="card-title">{projectTitle}</h2>
        <p className='text-sm md:text-lg'>{projectDescription}</p>
        <div className="divider"></div>
        <span className='text-orange-500'>Available Links :</span>
        <div className="card-actions  mt-5 flex flex-wrap justify-around ">
          {githubLink && <Link href={githubLink} className="link">Github Repo</Link>}
          {liveLink && <Link href={liveLink} className="link">Live Preview</Link>}
        </div>
      </div>
      {liveLink ? (
        <Link href={liveLink}>
          <figure>
            <Image
              src={projectImage}
              alt="project image"
              width={500}
              height={500}
            />

          </figure>
        </Link>
      ) :
        (
          <figure>
            <Image
              src={projectImage}
              alt="project image"
              width={500}
              height={500}
            />

          </figure>
        )

      }
    </div>
  )
}

export default ProjectCard
