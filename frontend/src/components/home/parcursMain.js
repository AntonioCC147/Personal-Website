import Container from 'react-bootstrap/Container';

import ParcursText from './parcursText';

import '../../components/containers/text.css';
import './parcurs.css';

export default function ParcursMain() {
    return (
        <Container fluid className="bg-dark" style={{ paddingBottom: "25px", color: "white"}}>
            <p className="title">Parcursul meu</p>
            <p className="subTitle">Subtitlu</p>
            <div className="text-center">
                <ParcursText direction="right" title="Ceva" period="2022-2023"
                            description={<>Ana are mere si merele o au pe ana</>}
                />
                <div className="verticalLine"/>
                <ParcursText direction="left" title="Ceva" period="2022-2023"
                            description={<>Ana are mere si merele o au pe ana</>}
                />
                <div className="verticalLine"/>
                <ParcursText direction="right" title="Ceva" period="2022-2023"
                            description={<>Ana are mere si merele o au pe ana</>}
                />
                <div className="verticalLine"/>
                <ParcursText direction="left" title="Ceva" period="2022-2023"
                            description={<>Ana are mere si merele o au pe ana</>}
                />
                <div className="verticalLine"/>
                <ParcursText direction="right" title="Ceva" period="2022-2023"
                            description={<>Ana are mere si merele o au pe ana</>}
                />
            </div>
        </Container>
    )
}