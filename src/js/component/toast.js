import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Notification() {
	const [show, setShow] = useState(false);

	return (
		<Row>
			<Col xs={6}>
				<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
					<Toast.Header>
						<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
						<strong className="mr-auto">Bootstrap</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body>Woohoo, youre reading this text in a Toast!</Toast.Body>
				</Toast>
			</Col>
			<Col xs={6}>
				<Button onClick={() => setShow(true)}>Show Toast</Button>
			</Col>
		</Row>
	);
}
