import React from 'react'
import { Link } from 'react-router-dom'
import { ModalCourse } from './styled'

export default function Modal() {
  return (
    <ModalCourse>
      <div className="course-modal">
        <section id="course-infor">
          <div className="container">
            <div className="gradients">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              quidem exercitationem aliquid soluta consequatur eaque.
              Perspiciatis deserunt non praesentium, corporis ut officiis
              provident omnis sapiente odit voluptate modi, eligendi eaque!
            </div>
          </div>
        </section>
      </div>
    </ModalCourse>
  )
}
