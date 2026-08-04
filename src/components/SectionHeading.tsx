import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface SectionHeadingProps {
  title: string
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Box sx={{ width: 44, height: 4, borderRadius: 2, bgcolor: 'secondary.main', mb: 1.5 }} />
      <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
    </Box>
  )
}
