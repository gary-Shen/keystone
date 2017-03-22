import React, { Component } from 'react';
import Container from '../../../components/Container';
import { Col, Row } from '../../../components/Grid';
import ValueProp from './header/ValueProp';
import theme from '../../../theme';
import { compose } from 'glamor';
import { EntypoTools } from 'react-entypo';
import { rhythm } from 'utils/typography';

export default class ValueProps extends Component {
	render () {
		return (
			<div className={compose(styles.wrapper)}>
				<Container>
					<div className={compose(styles.intro)}>
						<h2 className={compose(styles.heading)}>What you build is up to you.</h2>
						<p className={compose(styles.subheading)}>There are a lot of frameworks that make decisions for you, and many that take decisions away. Keystone doesn't do that. Use the features that suit you, and replace the ones that don't.</p>
						<EntypoTools style={{ width: '90px', height: '90px' }} />
					</div>
					<Row small="1" medium="1/2" large="1/4">
						<Col>
							<ValueProp
								title="Built on Express"
								text="Keystone can configure Express for you, or you can take over and treat Keystone like any other Express middleware.\nYou can also easily integrate it into an existing Express app."
							/>
						</Col>
						<Col>
							<ValueProp
								title="Powered by MongoDB"
								text="Keystone uses Mongoose, the leading ODM for node.js and MongoDB, and gives you a single place for your schema, validation rules and logic.\nSo anything you can build with MongoDB, you can build with Keystone."
							/>
						</Col>
						<Col>
							<ValueProp
								title="Lightweight and flexible"
								text="Keystone is designed to be as light as you want - you can pick and choose the features you want to include.\nCreate your own routes, your own database schema, and use any template language you like."
							/>
						</Col>
						<Col>
							<ValueProp
								title="Extendable"
								text="One of the greatest things about node.js is the vast number of quality packages available.\nKeystone is designed to let you use any of them, without losing the benefits it provides."
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
};

const styles = {
	wrapper: {
		backgroundColor: theme.color.blue,
		color: 'white',
	},
	intro: {
		paddingBottom: rhythm(2),
		paddingTop: rhythm(2),
		textAlign: 'center',
	},
	heading: {
		fontSize: '2.6em',
		color: 'white',
	},
	subheading: {
		fontSize: '1.8em',
		lineHeight: '1.2em',
		paddingBottom: '1em',
	},
};