import React from 'react';
import './Curriculam.css'
// import paper_craft from '../../assets/paper_craft.jpg'
// import portrait from '../../assets/portrait.jpg'
// import clay from '../../assets/clay_work.jpg'
import small_std from '../../assets/small_child.jpg'
import mod_std from '../../assets/moderate_child.jpg'
import exp_std from '../../assets/exp_student.jpg'
import brush_shade from '../../assets/brush_shade.png'

const Curriculam = () => {
  return (
    <main id='main_margin'>
      <hr className="featurette-divider" />
      <h1 className="headin">
        {/* <span id="curimg">
          <img src={Curriculamlogo} alt="Curriculam Logo" />
        </span> */}
        <span className="brush-overlay">
          <img src={brush_shade} alt="Brush Shade" className="brush-shade" />
          Curriculam
        </span>
      </h1>

      {/* <hr className="featurette-divider" /> */}

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Junior Begineer(4-6 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <ul>
              <li>Understanding of Lines and Pattern</li>
              <li>Understanding of Shapes and Form</li>
              <li>Introduction to Abstract</li>
              <li>Curved Line and Pattern </li>
            </ul>
            <h5>And Gradually Move to</h5>
            <ul>
              <li>Colour study , Unidirectional colouring , Shading and Bleending</li>
              <li>Handling of Point , Brushes and Colours</li>
              <li>Study of Curve line object</li>
              <li>Motor Skill development Activity using form of Art</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration : 1.5 Years</span><span className="text-body-secondary">No. Of Sessions: 120-130</span></h5>
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={small_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Senior Seeker(8-11 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <h5>The Children is Ready to Learn these Things</h5>
            <ul>
              <li>Basics of pencil sketching and shading</li>
              <li>Basics of live object drawing</li>
              <li>Basics of water colors, tips and techniques</li>
              <li>Still life drawing</li>
              <li>Composite drawing</li>
              <li>Styles of various art masters-art history</li>
              <li>Basics of Acrylics, glass paints, color pencils, soft pastels, charcoal</li>
              <li>Traditional art warli, Madhubani etc</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration : 1.5 Years </span><span className="text-body-secondary">No. Of Sessions: 120-130</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={mod_std}  // Use the imported image variable here
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Senior Expresser(11-14 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <ul>
              <li>Understanding of Lines and Pattern</li>
              <li>Understanding of Shapes and Form</li>
              <li>Introduction to Abstract</li>
              <li>Curved Line and Pattern </li>
            </ul>
            <h5>And Gradually Move to</h5>
            <ul>
              <li>Colour study , Unidirectional colouring , Shading and Bleending</li>
              <li>Handling of Point , Brushes and Colours</li>
              <li>Study of Curve line object</li>
              <li>Motor Skill development Activity using form of Art</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration : 3 Years </span><span className="text-body-secondary">No. Of Sessions: 250+</span></h5>
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={exp_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />
    </main>
  );
};

export default Curriculam;
