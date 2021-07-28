import React from 'react'
import {useState} from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import {BiPlus, BiMinus} from 'react-icons/bi'

const ProfileItem = (props) => {

    const [expanded, setExpanded] = useState(false);

    const average = (arr) => {
        var sum = 0;
        for(var i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i], 10);
        }
        return sum/arr.length;
    }

    const toggleExpanded = () => {
        if (expanded === false) {
            setExpanded(true);
        } else {
            setExpanded(false);
        }
    }

    const buttonStyle={
        fontSize: "3em"
    }

    return (
        <tr>
            <Row>
                <Col sm={3}>
                    <Image src={props.data.pic} roundedCircle className="profileImg"/>
                </Col>
                <Col sm={8}>
                    <h1 className="name">{props.data.firstName} {props.data.lastName}</h1>
                    <p>Email: {props.data.email}</p>
                    <p>Company: {props.data.company}</p>
                    <p>Skill: {props.data.skill}</p>
                    <p>Average: {average(props.data.grades)}%</p>
                    <br/>
                    <div className={expanded? "" : "hidden"}>
                        {props.data.grades.map((item, index) => (
                            <p key={index}>Test {index + 1}: {item}%</p>
                        ))}
                    </div>
                </Col>
                <Col>
                    <BiPlus onClick={toggleExpanded} className={expanded? "hidden":""} style={buttonStyle}/>
                    <BiMinus onClick={toggleExpanded} className={expanded? "":"hidden"} style={buttonStyle}/>
                </Col>
            </Row>
        </tr>
    )
}

export default ProfileItem
