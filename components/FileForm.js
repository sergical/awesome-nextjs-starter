import React, { useState } from 'react';
import {
  TextContainer,
  Heading,
  DisplayText,
  Card,
  Button,
  ButtonGroup,
  Form,
  FormLayout,
} from '@shopify/polaris';
import fileDownload from 'react-file-download';

export default function FileForm() {
  const [text, setText] = useState('');

  const readFile = async fileToRead => {
    const fileReader = new FileReader();
    fileReader.onload = e => setText(e.target.result);
    fileReader.readAsText(fileToRead);
  };

  const setUppercase = () => {
    setText(text.toUpperCase());
  };

  const saveText = () => {
    fileDownload(text, 'text.txt');
  };

  return (
    <Card sectioned>
      <TextContainer>
        <Heading>Upload a text file to read it's data</Heading>
      </TextContainer>
      <DisplayText size="small" />
      <Form>
        <FormLayout>
          <input
            type="file"
            accept="text/plain"
            onChange={e => readFile(e.target.files[0])}
          />
        </FormLayout>
        {text && (
          <>
            <TextContainer>
              <Heading>Result:</Heading>
              <p>{text}</p>
            </TextContainer>
            <ButtonGroup>
              <Button onClick={setUppercase}>Uppercasify</Button>
              <Button primary onClick={saveText}>
                Save
              </Button>
            </ButtonGroup>
          </>
        )}
      </Form>
    </Card>
  );
}
