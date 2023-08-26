import Image from 'react-bootstrap/Image';

import './parcurs.css';

export default function ParcursText(props) {
    const { direction, img, title, period, description } = props;

    if(direction === "left")
        return (
            <div class="row flex-row-reverse flex-md-row mt-5 pt-5">
                <div class="col-9 col-md-5 text-md-end leftText">
                    <h5>{title}</h5>
                    <h6>{period}</h6>
                    <p>{description}</p>
                </div>
                <div class="col-3 col-md-2 img text-center">
                    <Image className="imgParcurs" src={img} alt="img" roundedCircle/>
                </div>
            </div>
        )
    else if(direction === "right")
        return (
            <div class="row justify-content-md-end mt-5 pt-5">
                <div class="col-3 col-md-2 img text-center">
                    <Image className="imgParcurs" src={img} alt="img" roundedCircle/>
                </div>
                <div class="col-9 col-md-5 text-md-start rightText">
                    <h5>{title}</h5>
                    <h6>{period}</h6>
                    <p>{description}</p>
                </div>
            </div>
        )
}