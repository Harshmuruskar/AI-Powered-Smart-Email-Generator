
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import './App.css'
import { useState } from 'react'
import axios from 'axios'


function App() {

  const[emailContent, setEmailContent] = useState('')
  const[tone, setTone] = useState('')
  const[loading, setLoading] = useState(false)
  const[generatedReply, setGeneratedReply] = useState('')

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });

      setGeneratedReply(
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error('Error generating email reply:', error);
      setGeneratedReply('');
    } finally {
      setLoading(false);
    }
  }


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom>AI Powered Email Assistant</Typography>


    <Box sx={{mx: 3}}>
      <TextField
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        label='Original email content'
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }}>
  <InputLabel>Tone (Optional)</InputLabel>
  <Select
    value={tone || ''}
    label="tone (Optional)"
    onChange={(e)=>setTone(e.target.value)}

    // asdfghjklgit 
  >
    <MenuItem value="None">None</MenuItem>
    <MenuItem value="Professional">Professional</MenuItem>
    <MenuItem value="Casual">Casual</MenuItem>
    <MenuItem value="Friendly">Friendly</MenuItem>
  </Select>
</FormControl>


    <Button variant="contained"
    onClick={handleSubmit}
     disabled={!emailContent || loading }>
     {loading ? <CircularProgress size={24}/>: 'Generate Reply'}
  </Button>

       
       
    </Box>


     <Box sx={{mx: 3}}>
      <TextField
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        
        value={generatedReply || ''}
       inputProps={{ readOnly: true }}
        sx={{ mb: 3 }}
      /> 

      <button variant='outlined' onClick={() => navigator.clipboard.writeText(generatedReply)}>
        Copy to Clipboard
      </button>

      </Box>



    </Container>
  )
}

export default App
