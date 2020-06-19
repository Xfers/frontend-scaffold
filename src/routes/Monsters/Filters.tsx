import React from 'react'
import { Select, DatePicker } from 'antd'
import styled from '@emotion/styled'

export default function () {
  return (
    <Container>
      <Row>
        <Filter>
          <FilterTitle>Options</FilterTitle>
          <Select
            placeholder="Select Option"
            mode="multiple"
            style={{ width: '100%' }}
            showSearch={false}
            maxTagCount={2}
            showArrow
          >
            <Select.Option key={1} value={1}>
              Lorem
            </Select.Option>
            <Select.Option key={2} value={2}>
              Ipsum
            </Select.Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Single Date</FilterTitle>
          <DatePicker style={{ width: '100%' }} />
        </Filter>
        <Filter>
          <FilterTitle>Date Range</FilterTitle>
          <DatePicker.RangePicker style={{ width: '100%' }} />
        </Filter>
        <Filter>
          <FilterTitle>Tags</FilterTitle>
          <Select
            placeholder="Select Tags"
            mode="multiple"
            style={{ width: '100%' }}
            showSearch={false}
            maxTagCount={1}
            showArrow
            listHeight={300}
            maxTagTextLength={22}
          >
            <Select.Option key={1} value={1}>
              Lorem
            </Select.Option>
            <Select.Option key={2} value={2}>
              Ipsum
            </Select.Option>
          </Select>
        </Filter>
      </Row>
    </Container>
  )
}

const Container = styled.div``

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Filter = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0px;
  min-width: 285px;
  padding-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const FilterTitle = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  margin-bottom: 5px;
`
