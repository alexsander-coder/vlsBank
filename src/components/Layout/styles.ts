import styled from "styled-components";

/**
 * Layout
 * MH = Main Header
 * AS = Aside
 * CT = Content
 */

export const GridLayout = styled.div`
display: grid;
grid-template-columns: 12.5rem auto;
grid-template-rows: 3.4rem auto;
grid-template-areas:
  'AS MH'
  'AS CT';
height: 100vh;

`;
