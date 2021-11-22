import {Component} from 'react';
import color from 'color';
import {Page} from '@mxjs/a-page';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts';
import api from '@mxjs/api';
import {Box, Link} from '@mxjs/box';
import {RightOutlined} from '@ant-design/icons';
import Icon from '@mxjs/icons';
import {Card, Col, Row, List} from 'antd';

export default class extends Component {
  state = {
    charts: [],
    stats: [],
  };

  componentDidMount() {
    api.get('admin', {loading: true}).then(({ret}) => this.setState(ret));
  }

  render() {
    return <Page
      raw
      breadcrumb={false}
    >
      <Card title="数据统计">
        <Row gutter={32}>
          {this.state.stats.map(stat => (
            <Col key={stat.title} lg={6} md={12} sm={24}>
              <Box
                relative
                white
                p5
                style={{
                  background: `linear-gradient(135deg, ${stat.color}, ${color(stat.color).lighten(0.2).string()})`,
                }}
              >
                <Box textLG mb5>{stat.title}</Box>
                <Box text="3em">{stat.value}</Box>
                <Icon type={stat.icon} css={{
                  opacity: .15,
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '2rem',
                  fontSize: '5rem',
                }}/>
              </Box>
            </Col>
          ))}
        </Row>
      </Card>

      <Box mt={4}>
        <Card title="交易走势">
          <Chart
            height={400}
            data={this.state.charts}
            scale={{
              date: {
                type: 'time',
                mask: 'MM-DD',
              },
            }}
            forceFit
          >
            <Legend/>
            <Axis name="date"/>
            <Axis name="value"/>
            <Tooltip
              crosshairs={{
                type: 'y',
              }}
            />
            <Geom
              type="line"
              position="date*value"
              size={2}
              color={'name'}
              shape={'smooth'}
            />
            <Geom
              type="point"
              position="date*value"
              size={4}
              shape={'circle'}
              color={'name'}
              style={{
                stroke: '#fff',
                lineWidth: 1,
              }}
            />
          </Chart>
        </Card>
      </Box>

      <Box mt={4}>
        <Card title="更新日志"
          extra={
            <Link href="#" target="_blank" fontWeight="normal" fontSize="md">
              更多{' '}<RightOutlined/>
            </Link>
          }
          bodyStyle={{paddingTop: 0, paddingBottom: 0}}
        >
          <List
            dataSource={[
              {
                title: 'Cras justo odio',
                createdAt: '2020-01-01',
              },
              {
                title: 'Dapibus ac facilisis in',
                createdAt: '2020-01-01',
              },
              {
                title: 'Vestibulum at eros',
                createdAt: '2020-01-01',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <a href="#" target="_blank">{item.title}</a>
                <Box display="inline" color="muted" sx={{float: 'right'}}>{item.createdAt}</Box>
              </List.Item>
            )}
          />
        </Card>
      </Box>
    </Page>;
  }
}
