import { FC } from "react"
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';


interface IData {
    data: any,
    personalization: {color: string, font: string, fontSize: number}
  }

  
  const styles = StyleSheet.create({
    page: {
        
    },
    photoContainer: {
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    photo: {
        borderRadius: 500,
        width: 100,
        height: 100,
    },
    name: {
        marginRight: 5, 
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    contact: {
      fontSize: 12,
    },
    dot: {
      width: 8,
      height: 8,
      marginRight: 8,
      borderRadius: 50
    },
    dataContainer: {
      marginTop: 8,
      marginLeft: 36
    }
  });
  
  const PDFPattern2: FC<IData> = ({data, personalization}) => (
    

  <Document>
    <Page size="A4" style={{fontFamily: personalization.font}}>
     
    </Page>
  </Document>
);

export default PDFPattern2