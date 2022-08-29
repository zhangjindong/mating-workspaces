import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import imageViewer from '@mating/ui-image-viewer';
interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！{imageViewer}
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
