import "./style.css"

import img1 from "./Images/shortGun1.png"
import img2 from "./Images/view-powerful-3d-weapon.jpg"
import img3 from "./Images/pistol.jpg"
import img4 from "./Images/machine-gun.jpg"
import img5 from "./Images/sniper2.png"
import img6 from "./Images/rifle1.png"
import img7 from "./Images/rifle2.png"
import img8 from "./Images/ak47.png"
import img9 from "./Images/m194.png"
import img10 from "./Images/ak57.png"

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10
]

export default function Carousel() {
  return (
    <div className="wrapper">
      <div className="inner" style={{ "--quantity": images.length }}>
        {images.map((img, index) => (
          <div
            key={index}
            className="card"
            style={{
              "--index": index,
              "--color-card": "142, 252, 204",
              "--img": `url(${img})`,   
            }}
          >
            <div className="img"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
