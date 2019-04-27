import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '一朵云运营平台',
          title: '一朵云运营平台',
          href: 'https://www.onecloud.com',
          blankTarget: true,
        },
        // {
        // key: 'github',
        // title: <Icon type="github" />,
        // href: 'https://github.com/ant-design/ant-design-pro',
        // blankTarget: true,
        // },
        // {
        // key: '',
        // title: 'Ant Design',
        // href: 'https://ant.design',
        // blankTarget: true,
        // },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 浙江数蜂科技出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
