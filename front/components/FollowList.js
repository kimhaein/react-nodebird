import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { List, Button, Card } from 'antd'
import { StopOutlined } from '@ant-design/icons'


const ButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0
`
const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <ButtonWrapper>
          <Button>더보기</Button>
        </ButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  )
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}
export default FollowList