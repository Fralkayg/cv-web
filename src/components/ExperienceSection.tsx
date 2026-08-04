import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'
import { formatPeriod } from '../utils/formatPeriod'
import { parseTechnologies } from '../utils/parseTechnologies'

export default function ExperienceSection() {
  const { t, locale } = useLanguage()

  return (
    <Box component="section" id="experience" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.experience} />

        <Stack spacing={3}>
          {t.experience.map((job) => (
            <Card
              key={`${job.company}-${job.startDate}`}
              variant="outlined"
              sx={{
                borderLeft: '4px solid',
                borderLeftColor: 'primary.main',
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
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: 'rgba(14,124,134,0.1)', color: 'primary.main', width: 44, height: 44 }}
                  >
                    <WorkRoundedIcon />
                  </Avatar>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={0.5}
                      sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
                    >
                      <Typography variant="h6" component="h3">
                        {job.company}
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', whiteSpace: 'nowrap' }}>
                        {formatPeriod(job, locale, t.duration)}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {job.role}
                    </Typography>
                  </Box>
                </Stack>

                <List dense disablePadding sx={{ mb: 1.5 }}>
                  {job.bullets.map((bullet, i) => (
                    <ListItem key={i} disableGutters alignItems="flex-start" sx={{ py: 0.4 }}>
                      <ListItemIcon sx={{ minWidth: 28, mt: '3px' }}>
                        <CheckRoundedIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={bullet}
                        slotProps={{ primary: { variant: 'body2', color: 'text.secondary' } }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ mb: 1.5 }} />

                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  {t.technologiesLabel}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {parseTechnologies(job.technologies).map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
