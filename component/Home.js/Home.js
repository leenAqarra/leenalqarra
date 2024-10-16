import React , { Fragment } from "react";
import Headers from'./Headers';
import './Home.css';
import prideimg from './../../assets/1.jpeg';
import make from './../../assets/2.png';
import Data from "../../data";
import {Carousel} from 'react-bootstrap';
import item1 from './../../assets/girl.jpg';
import item2 from './../../assets/boy.jpg';


const Home = ()=>{
    
    const blogitem = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                <img src={item.img}/>
                <h5>{item.title}</h5>
                <span>{item.time}</span> 
                <h6>{item.price}</h6>
                 </div>
                 <button><a href='#'>order now</a></button>
            </div>
        )
    })
    return(
        <Fragment>
      <Headers/>
      <section className='numbers'>
        <div className='Container'>
        <div className='row'>
                <div className='col-md-3'>
                    <h2>12394+</h2>
                    <h6>SAVING</h6>
                </div>
                <div className='col-md-3'>
                    <h2>5786+</h2>
                    <h6>PHOTOS</h6>
                </div>
                <div className='col-md-3'>
                    <h2>1440+</h2>
                    <h6>ROCKETS</h6>
                </div>
                <div className='col-md-3'>
                    <h2>7110+</h2>
                    <h6>GLOBES</h6>
                </div>
            </div>
        </div>
      </section>
      <section className='pride'>
      <div className='Container'>
        <div className='row'>
        <div className='col-md-6'>
            <img src={prideimg} title='prideimg'/>
                    </div>
                    <div className='col-md-6'>
                   <h2> We pride ourselves on making real food from the best ingredients.</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button><a herf='#'></a>learn more</button>
                    </div>
                    </div>
                    </div>
      </section>
      <section className='make'>
        <div className='Container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                    <li>Etiam sed dolor ac diam volutpat.</li>
                    <li>Erat volutpat aliquet imperdiet.</li>
                    <li> purus a odio finibus bibendum</li>
                </ul>
                <button><a herf='#'>learn more</a></button>
                </div>
                <div className='col-md-6'>
                    <img src={make} title='make'/>
                </div>
            </div>
        </div>

      </section>
      <section className='paralesx'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>When a man's stomach is full it makes no<br/>
                    difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href='#' >watch our story</a>
                </div>
            </div>
        </div>
      </section>
      <section className='blogs'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/>
                         leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
            </div>
            <div className='row'>
                {blogitem}
            </div>
        </div>
      </section>
      <section className="slider">
      <div className='container'>
      <div className='row'>
      <div className='col-lg-12 col-md-12'>
        <h2>Testimonials</h2>
        </div>
        </div>
       </div>

      <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                     <Carousel>
      <Carousel.Item>
        <img src={item1}/>
        <Carousel.Caption>
          <p>"Far far away,behind the word mountains , far from the countries <br/>Vokalia and Consonantia,there live the blind texts.Separated they<br/> live"</p>
            <spam>simab Dave-web Designer</spam>
            </Carousel.Caption>
         </Carousel.Item>
       <Carousel.Item>
      < img src={item2}/>
            <Carousel.Caption>
            <p>"Far far away,behind the word mountains , far from the countries<br/> Vokalia and Consonantia,there live the blind texts.Separated they<br/> live"</p>
            <spam>johnthan Doe -UX Designer</spam>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
                </div>
            </div>
        </div>
        
   
      </section>
      <section className="white">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Hurry up! Subscribe our newsletter<br/>
                    and get 25% Off</h2>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <div className='container'>
            <div className='row'><input type="email" class="form-control"  placeholder="Enter email here"></input>
                    <div className='col-lg-4 col-md-4'>
                  
                     <button className="supmit">Subscribe</button></div>
                     </div>
                     </div>
                    
                </div>
            </div>
        </div>
      </section>
      
 </Fragment>

    )
}
export default Home;