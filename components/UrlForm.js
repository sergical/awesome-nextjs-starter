import React, { useState } from 'react';
import axios from 'axios';
import {
  ResourceList,
  Card,
  Button,
  Form,
  FormLayout,
  TextField,
  Avatar,
  TextStyle,
} from '@shopify/polaris';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.get(url);
    setData(res.data);
  };

  return (
    <Card sectioned>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={url}
            onChange={value => setUrl(value)}
            label="Enter a JSON Endpoint"
            type="text"
            helpText={
              <span>
                For example, https://jsonplaceholder.typicode.com/users
              </span>
            }
          />
          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
      {data && (
        <ResourceList
          resourceName={{ singular: 'response', plural: 'responses' }}
          items={data}
          showHeader
          renderItem={item => {
            const { id, name, email } = item;

            return (
              <ResourceList.Item
                id={id}
                media={
                  <Avatar
                    customer
                    size="medium"
                    name={name}
                    source="https://avatars.io/static/default_128.jpg"
                  />
                }
                accessibilityLabel={`View details for ${name}`}
              >
                <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{email}</div>
              </ResourceList.Item>
            );
          }}
        />
      )}
    </Card>
  );
}
