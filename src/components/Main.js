import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
      
        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h3 className="major">Resume</h3>
          <span className="image main"><img src={pic01} alt="" /></span>
         {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h3 className="major">Work</h3>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Guidewire Software-<i> Software Engineer</i> <br></br>
           Spell Train-<i> Product Manager</i> <br></br> Aquantia-<i> Software Engineer Intern</i><br></br>
           Audible Magic-<i> Software Support Engineer Intern</i><br></br>Actuate-<i> Software Engineer Intern</i></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h3 className="major">About</h3>
          <span className="image main"><img src={pic03} alt=""/></span>
          <p>I am a San Jose State University Alumni in Computer Engineering. I have several years of experience in Software Engineering, Product Management
            and Client Facing. I am looking for career opportunities in Product Management that allow me to take real customer requirements and developing products that are valuable, 
            innovative, and successful.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h3 className="major">Contact</h3>
          
          <form method="GET" action="mailto:AmirFarbod.Jahan@gmail.com" enctype="text/plain">
              <div>Subject</div>
              <input type="text" name="subject" />
              <div>Message</div>
              <textarea name="body"></textarea>
              <br/>
              <input type="submit" value="Send" className="special" />
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/farbod-jahan" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.facebook.com/farbods0" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/farbod_jahan/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/Farbods0" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main