import React from 'react';
import './index.css';
import Header from '../../organisms/Header';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Carousel className="zIndex0">
        <Carousel.Item>
          <img
            className="imgCover"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dea5ec05b%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dea5ec05b%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCover"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dea5ec05b%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dea5ec05b%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Carousel.Caption>
            <h3>Second</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCover"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dea5ec05b%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dea5ec05b%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis sequi voluptate! Nihil dolore facilis quasi officia soluta?
        Sed impedit quae laudantium dolor architecto vel ipsum. Repellendus qui
        in quae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt reiciendis sequi voluptate! Nihil dolore facilis quasi officia
        soluta? Sed impedit quae laudantium dolor architecto vel ipsum.
        Repellendus qui in quae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt reiciendis sequi voluptate! Nihil dolore
        facilis quasi officia soluta? Sed impedit quae laudantium dolor
        architecto vel ipsum. Repellendus qui in quae! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Incidunt reiciendis sequi voluptate!
        Nihil dolore facilis quasi officia soluta? Sed impedit quae laudantium
        dolor architecto vel ipsum. Repellendus qui in quae! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Incidunt reiciendis sequi
        voluptate! Nihil dolore facilis quasi officia soluta? Sed impedit quae
        laudantium dolor architecto vel ipsum. Repellendus qui in quae! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis
        sequi voluptate! Nihil dolore facilis quasi officia soluta? Sed impedit
        quae laudantium dolor architecto vel ipsum. Repellendus qui in quae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis sequi voluptate! Nihil dolore facilis quasi officia soluta?
        Sed impedit quae laudantium dolor architecto vel ipsum. Repellendus qui
        in quae!
      </div>

      <div className="ourProud">Our pride</div>
      <div className="connectUs"></div>
      <div className="footer"></div>
    </div>
  );
};

export default MainPage;
