import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import farmer from '../../assets/farmer.jpg'
import forest from '../../assets/forest.jpg'
import hope from '../../assets/hope.jpg'
import "./Blogs.css"
function Blogs() {
  return (
    <div className="blogs">
      <h2 class="title">Latest Blogs</h2>
    <section class="tiles">
        <div class="tile">
            <img  src={farmer} alt="Image 1"></img>
            <h3>Climate Resilience Program</h3>
            <p>Introducing Agricultural Innovation for Climate Resilience Programme’s visionary innovators, who are enabling a sustainable future for agricultural stakeholders in low- and middle-income countries as the world grapples with the challenges of climate change.</p>
            <a class="btn">Read more<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></a>
        </div>

        <div class="tile">
            <img  src={forest} alt="Image 2"></img>
            <h3>Sustainable agriculture</h3>
            <p>Explore the transformative role of technology in sustainable agricultural practices. From precision farming to smart irrigation, discover how cutting-edge innovations are addressing agriculture's greatest challenges, ushering in a new era of efficiency, resilience, and environmental stewardship.</p>
            <a class="btn">Read more<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></a>
        </div>
        
        <div class="tile">
            <img  src={hope} alt="Image 3"></img>
            <h3>AI in farming</h3>
            <p>Discover the pivotal role of Artificial Intelligence in fostering sustainable farming practices and championing environmental conservation. Explore how AI-driven solutions are cultivating a harmonious balance between productivity and eco-friendliness, shaping the future of agriculture. </p>
            <a class="btn">Read more<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></a>
        </div>
    </section>
    </div>
  );
}

export default Blogs;
