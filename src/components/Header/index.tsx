import { Box, Stack } from '@mui/material';
import  React from 'react';
import BrandLogoText from '../../assets/brand/bitkub-logo.png'
import { Container } from '../CustomUI/Container';

export interface IHeaderHomePageProps {
}

export default function HeaderHomePage (props: IHeaderHomePageProps) {
  return (
    <Container>
    <Stack style={{backgroundColor:'green'}} direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={8}>
      <a href="./">
      <img style={{maxWidth:60}} src={BrandLogoText} alt="Brand Logo" />
      </a>
      <a href="/"><div>
        <h5>Trading</h5>
        </div></a>
      
    </Stack>
    </Container>
    
  );
}
