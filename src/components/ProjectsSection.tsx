import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="projects" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.projects} />

        <Grid container spacing={3}>
          {t.projects.map((project, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 16px 32px rgba(0, 0, 0, 0.45)'
                        : '0 16px 32px rgba(20, 40, 44, 0.1)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 2 }}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                  </Stack>
                  {project.link && (
                    <Button
                      size="small"
                      endIcon={<ArrowOutwardRoundedIcon />}
                      href={project.link}
                      target={project.link.startsWith('#') ? undefined : '_blank'}
                      rel={project.link.startsWith('#') ? undefined : 'noreferrer'}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      {t.viewProjectLabel}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
