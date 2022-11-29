import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { graphql } from 'gatsby';
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Page({ data }) {
  const contactLinks = data.allContentfulContactLink.nodes;
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='sm'>
        <Paper sx={{ p: 4 }}>
          <Typography variant='h3' align='center'>
            Get in touch
          </Typography>
          <Typography variant='body2' align='center'>
            Supporting text for the calls to action. This should make it clear
            who we are looking for and what the buttons below will do.
          </Typography>
          <Stack
            mt={2}
            spacing={{ xs: 1 }}
            direction={{ sm: 'column', md: 'row' }}
            justifyContent='space-evenly'
          >
            {contactLinks.map((contact, index) => (
              <Button variant='contained' key={index} href={contact.url}>
                {contact.label}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Container>
  );
}

export const data = graphql`
  query contactQuery {
    allContentfulContactLink {
      nodes {
        url
        label
      }
    }
  }
`;
