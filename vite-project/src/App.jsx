import Button from "./button";
import Card from "./card";
import './App.css'

export default function App(){
  return (
    <>
      <Button classGiven="nextBtn" label="NEXT"/>
      <Button classGiven="prevBtn" label="PREVIOUS"/>
      <Card />
    </>
  );
}