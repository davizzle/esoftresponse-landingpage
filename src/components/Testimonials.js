import React from 'react'
import Mover from './Mover'

function Testimonials() {
  return (
    <>
    <section className="testimonials__cont">
      <div className='testimonials__flex'>
        <div>
          <h2>Client testimonials</h2>
        </div>
        <div className="testimonials__text">
          <h4>Client Name, Company Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nulla tenetur provident beatae molestiae nam sunt nesciunt cumque dolore, pariatur accusamus culpa numquam quasi ea. Placeat corrupti veritatis possimus sit?</p>
        </div>
      </div>
        <div className='testimonials__mover'>
          <Mover color={'white'} />
        </div>
    </section>
    </>
  )
}

export default Testimonials