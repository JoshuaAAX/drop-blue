import { Box, Button, useColorMode,Text, Heading, Spacer, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";


  function App() {

   const [isFullScreen, setIsFullScreen] = useState(false);
   const videoRef = useRef(null);
    
   useEffect(() => {
    if (isFullScreen) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit full-screen mode:", err);
      });
    }
  }, [isFullScreen]);

   const fullScreen = () => {
    setIsFullScreen(true)
   }

    return (
      
      <Box
        width="100%" 
        height="100vh"
        bg="#0000AA" 
        display="flex"             
        justifyContent="center"    
        alignItems="center"       
        flexDirection="column"     
      >
        <VStack>
        <Box 
           bg="white"
           px={2} pt={1.5} pb={1.5}>
           <Heading  size='md' color="#0000AA" >
            [ WARNING ]
           </Heading>
        </Box>

        <Spacer/>

        <Heading  size='md' color="white">
          The website is under development. Please do not press continue:
        </Heading>

        <Spacer m={7}/>

        <Box 
           bg="#808080"  
           _hover={{ bg: "white", cursor: "pointer" }} 
           px={1} pt={1} pb ={1}
           onClick={fullScreen}
        >
           <Heading  size='md' color="#0000AA" >
            Continue
           </Heading>
        </Box>

        {isFullScreen && (
        <video 
          ref={videoRef}
          src="/jumscare.mp4" // Reemplaza con la ruta de tu video
          autoPlay
          loop>
        </video>
        )}

        </VStack>

        
        
        
      </Box>
      
    )
  }

  export default App
