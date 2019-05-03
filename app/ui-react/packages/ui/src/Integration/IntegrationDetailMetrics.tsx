import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications,
  Card,
  CardBody,
  CardGrid,
  CardTitle,
  Col,
  Icon,
  Row,
} from 'patternfly-react';
import * as React from 'react';

export interface IIntegrationDetailMetricsProps {
  i18nLastProcessed: string;
  i18nSince: string;
  i18nTotalErrors: string;
  i18nTotalMessages: string;
  i18nUptime: string;
  errors?: number;
  lastProcessed?: string;
  messages?: number;
  start?: string;
}

export class IntegrationDetailMetrics extends React.Component<
  IIntegrationDetailMetricsProps
> {
  public render() {
    const okMessagesCount = this.props.messages! - this.props.errors!;
    const startAsDate = new Date(this.props.start!);
    const startAsHuman = startAsDate.toLocaleString();

    return (
      <CardGrid>
        <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Col xs={6} sm={3} md={3}>
            <Card accented={true} aggregated={true} matchHeight={true}>
              <CardTitle>
                <Icon type="pf" name="error-circle-o" />
                {this.props.errors}
              </CardTitle>
              <CardBody>{this.props.i18nTotalErrors}</CardBody>
            </Card>
          </Col>
          <Col xs={6} sm={3} md={3}>
            <Card accented={true} aggregated={true} matchHeight={true}>
              <CardTitle>
                <Icon name="shield" />
                {this.props.i18nLastProcessed}
              </CardTitle>
              <CardBody>
                <h2>{this.props.lastProcessed}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6} sm={3} md={3}>
            <Card accented={true} aggregated={true} matchHeight={true}>
              <CardTitle>
                <AggregateStatusCount>
                  {this.props.messages}&nbsp;
                </AggregateStatusCount>
                {this.props.i18nTotalMessages}
              </CardTitle>
              <CardBody>
                <AggregateStatusNotifications>
                  <AggregateStatusNotification>
                    <Icon type="pf" name="ok" />
                    {okMessagesCount}&nbsp;
                  </AggregateStatusNotification>
                  <AggregateStatusNotification>
                    <Icon type="pf" name="error-circle-o" />
                    {this.props.errors}
                  </AggregateStatusNotification>
                </AggregateStatusNotifications>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6} sm={3} md={3}>
            <Card accented={true} aggregated={true} matchHeight={true}>
              <Card.Title className={'text-left'}>
                <small className={'pull-right'}>
                  {this.props.i18nSince}
                  {startAsHuman}
                </small>
                <div>{this.props.i18nUptime}</div>
              </Card.Title>
              <Card.Body>
                <></>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGrid>
    );
  }
}
