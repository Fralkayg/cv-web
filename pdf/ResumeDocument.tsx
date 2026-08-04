import React from 'react'
import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { Locale } from '../src/data/content'
import type { CVContent, ExperienceEntry } from '../src/data/types'
import { formatPeriod } from '../src/utils/formatPeriod'
import { parseTechnologies } from '../src/utils/parseTechnologies'
import type { ResumeExtras } from './resumeExtras'

// Treat each word as a single unbreakable syllable so long strings (URLs,
// handles) wrap on whole words instead of getting an inserted hyphen mid-word.
Font.registerHyphenationCallback((word) => [word])

const TEAL = '#0e7c86'
const TEAL_DARK = '#0a5860'
const TEAL_TINT = 'rgba(255,255,255,0.18)'
const INK = '#1f2933'
const INK_SOFT = '#52606d'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: INK,
    // Page padding (unlike a View's) repeats on every page, giving each
    // continuation page the same breathing room at the top/bottom instead of
    // content butting straight up against the physical page edge.
    paddingTop: 24,
    paddingBottom: 28,
  },
  sidebarBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '35%',
    backgroundColor: TEAL,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // Cancels the page's paddingTop so this box's white background starts at
    // the true page edge, fully masking the fixed teal sidebar layer behind
    // it (only the first page reaches this element, since it isn't repeated).
    marginTop: -24,
    paddingHorizontal: 32,
    paddingTop: 30,
    paddingBottom: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: TEAL,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: INK,
  },
  title: {
    fontSize: 11,
    color: INK_SOFT,
    marginTop: 2,
  },
  body: {
    flexDirection: 'row',
  },
  sidebar: {
    width: '35%',
    paddingHorizontal: 22,
    paddingTop: 10,
  },
  main: {
    width: '65%',
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  sidebarSection: { marginBottom: 18 },
  sidebarHeading: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 9,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: TEAL_TINT,
  },
  sidebarItem: { marginBottom: 9 },
  sidebarLabel: {
    fontSize: 7.5,
    color: 'rgba(255,255,255,0.75)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  sidebarValue: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: '#ffffff' },
  sidebarPillRow: { flexDirection: 'row', flexWrap: 'wrap' },
  sidebarPillSolid: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: TEAL_DARK,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    paddingHorizontal: 5.5,
    paddingVertical: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  sidebarPillOutline: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 7,
    paddingHorizontal: 5.5,
    paddingVertical: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  sidebarEducationItem: { marginBottom: 10 },
  sidebarEducationPeriod: {
    fontSize: 7.5,
    color: 'rgba(255,255,255,0.75)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  sidebarEducationInstitution: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#ffffff' },
  sidebarEducationDegree: { fontSize: 8, color: 'rgba(255,255,255,0.85)', marginTop: 1 },
  mainSection: { marginBottom: 16 },
  mainHeading: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: TEAL_DARK,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 9,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: TEAL,
  },
  paragraph: { fontSize: 9.5, color: INK_SOFT, lineHeight: 1.5, marginBottom: 7 },
  job: { marginBottom: 13 },
  jobHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  jobCompany: { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  jobPeriod: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: TEAL_DARK },
  jobRole: { fontSize: 9, fontStyle: 'italic', color: INK_SOFT, marginTop: 1, marginBottom: 5 },
  bulletRow: { flexDirection: 'row', marginBottom: 3.5 },
  bulletDot: { width: 9, fontSize: 9, color: TEAL },
  bulletText: { flex: 1, fontSize: 9, color: INK_SOFT, lineHeight: 1.4 },
  techLabel: { fontSize: 8, color: INK_SOFT, marginTop: 3, marginBottom: 5, fontFamily: 'Helvetica-Bold' },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap' },
  pill: {
    fontSize: 7.5,
    color: TEAL_DARK,
    borderWidth: 0.75,
    borderColor: TEAL,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    marginRight: 4,
    marginBottom: 4,
  },
  link: { color: '#ffffff', textDecoration: 'none' },
})

function SidebarSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <View style={styles.sidebarSection} wrap={false}>
      <Text style={styles.sidebarHeading}>{heading}</Text>
      {children}
    </View>
  )
}

function JobEntry({
  job,
  locale,
  content,
}: {
  job: ExperienceEntry
  locale: Locale
  content: CVContent
}) {
  return (
    <View style={styles.job} wrap={false}>
      <View style={styles.jobHeaderRow}>
        <Text style={styles.jobCompany}>{job.company}</Text>
        <Text style={styles.jobPeriod}>{formatPeriod(job, locale, content.duration)}</Text>
      </View>
      <Text style={styles.jobRole}>{job.role}</Text>
      {job.bullets.map((bullet, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{bullet}</Text>
        </View>
      ))}
      <Text style={styles.techLabel}>{content.technologiesLabel}</Text>
      <View style={styles.pillRow}>
        {parseTechnologies(job.technologies).map((tech) => (
          <Text key={tech} style={styles.pill}>
            {tech}
          </Text>
        ))}
      </View>
    </View>
  )
}

export function ResumeDocument({ content, extras, locale }: { content: CVContent; extras: ResumeExtras; locale: Locale }) {
  return (
    <Document title={content.meta.pageTitle} language={locale}>
      <Page size="LETTER" style={styles.page} wrap>
        <View style={styles.sidebarBackground} fixed />

        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{content.initials}</Text>
          </View>
          <View>
            <Text style={styles.name}>{content.name}</Text>
            <Text style={styles.title}>{content.title}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.sidebar}>
            <SidebarSection heading={extras.sectionTitles.contact}>
              <View style={styles.sidebarItem}>
                <Text style={styles.sidebarLabel}>{content.contact.emailLabel}</Text>
                <Link src={`mailto:${content.contact.email}`} style={[styles.sidebarValue, styles.link]}>
                  {content.contact.email}
                </Link>
              </View>
              <View style={styles.sidebarItem}>
                <Text style={styles.sidebarLabel}>{content.contact.locationLabel}</Text>
                <Text style={styles.sidebarValue}>{content.contact.location}</Text>
              </View>
              <View style={styles.sidebarItem}>
                <Text style={styles.sidebarLabel}>{content.contact.linkedinLabel}</Text>
                <Link src={content.contact.linkedinUrl} style={[styles.sidebarValue, styles.link]}>
                  {content.contact.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </Link>
              </View>
              <View style={styles.sidebarItem}>
                <Text style={styles.sidebarLabel}>{content.contact.githubLabel}</Text>
                <Link src={content.contact.githubUrl} style={[styles.sidebarValue, styles.link]}>
                  {content.contact.githubUrl.replace(/^https?:\/\//, '')}
                </Link>
              </View>
            </SidebarSection>

            <SidebarSection heading={extras.sectionTitles.languages}>
              {extras.languages.map((lang) => (
                <View key={lang.name} style={styles.sidebarItem}>
                  <Text style={styles.sidebarValue}>{lang.name}</Text>
                  <Text style={styles.sidebarLabel}>{lang.level}</Text>
                </View>
              ))}
            </SidebarSection>

            <SidebarSection heading={extras.sectionTitles.certificates}>
              {extras.certificates.map((cert) => (
                <View key={cert.name} style={styles.sidebarItem}>
                  <Text style={styles.sidebarValue}>{cert.name}</Text>
                </View>
              ))}
            </SidebarSection>

            <SidebarSection heading={extras.sectionTitles.technicalSkills}>
              <View style={styles.sidebarPillRow}>
                {extras.technicalSkills.map((skill) => (
                  <Text key={skill} style={styles.sidebarPillSolid}>
                    {skill}
                  </Text>
                ))}
              </View>
            </SidebarSection>

            <SidebarSection heading={extras.sectionTitles.interpersonalSkills}>
              <View style={styles.sidebarPillRow}>
                {extras.interpersonalSkills.map((skill) => (
                  <Text key={skill} style={styles.sidebarPillOutline}>
                    {skill}
                  </Text>
                ))}
              </View>
            </SidebarSection>

            <SidebarSection heading={extras.sectionTitles.education}>
              {extras.education.map((edu) => (
                <View key={`${edu.institution}-${edu.period}`} style={styles.sidebarEducationItem}>
                  <Text style={styles.sidebarEducationPeriod}>{edu.period}</Text>
                  <Text style={styles.sidebarEducationInstitution}>{edu.institution}</Text>
                  <Text style={styles.sidebarEducationDegree}>{edu.degree}</Text>
                </View>
              ))}
            </SidebarSection>
          </View>

          <View style={styles.main}>
            <View style={styles.mainSection}>
              <Text style={styles.mainHeading}>{extras.sectionTitles.summary}</Text>
              {content.summary.map((paragraph, i) => (
                <Text key={i} style={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
            </View>

            <View style={styles.mainSection}>
              <Text style={styles.mainHeading}>{extras.sectionTitles.experience}</Text>
              {content.experience.map((job) => (
                <JobEntry key={`${job.company}-${job.startDate}`} job={job} locale={locale} content={content} />
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
