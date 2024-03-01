import React from 'react'
import './Body.css'
import IMAGE from'../assets/morning.jpg'
import Button from './Button'

const Body = () => {
  return (
    <>
    <div className='pics'>
        <div className="pics_inner">
            <img src={IMAGE} alt="" />
        </div>
    </div>

    <div className="inner_section">
        <div className="inner_section_cont">
            <h2>Think Healthy. Think Massage</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quis error, voluptas expedita culpa adipisci assumenda iure autem mollitia deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum hic perferendis laboriosam. Fugit numquam similique cumque molestias soluta expedita porro! 

            </p>
            <div className="btnn">
            <Button borderKaRadius={"4px"} backgroundKaColor={"#e11d48"} fontColor={"#FFFFFF"} padding={"15px 5rem"} border={"none"}>Search Now</Button>
            <Button borderKaRadius={"4px"} backgroundKaColor={"#e11d48"} fontColor={"#FFFFFF"} padding={"15px 5rem"} border={"none"} cursor ={"pointer"}>Search Now</Button>

            </div>
            

        </div>

    </div>

    <div className="paragraph_sec">
        <div className="inner_paragraph_sec">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi vitae nostrum velit eum obcaecati delectus non iure quaerat laboriosam sint, officiis magnam qui fuga aperiam facilis ipsam doloremque saepe.Commodi vitae nostrum velit eum obcaecati delectus non iure quaerat laboriosam sint, officiis magnam qui fuga aperiam facilis ipsam doloremque saepe.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut iste ad deserunt numquam sequi eaque sit mollitia adipisci similique!Commodi vitae nostrum velit eum obcaecati delectus non iure quaerat laboriosam sint, officiis magnam qui fuga aperiam facilis ipsam doloremque saepe.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, amet. Voluptatibus omnis illo aliquam velit.</p>
        </div>
    </div>

    <div className="last_sec">
        <div className="last_sec_inner">
            <h1>Family Wellness Massage Tharapy</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, nostrum quo. Cupiditate ea corporis quasi. Reprehenderit consectetur blanditiis sed odit.
            </p>
            <p className='ppp'>Phone Number : 999999999</p>
        </div>
    </div>
    </>
  )
}

export default Body
