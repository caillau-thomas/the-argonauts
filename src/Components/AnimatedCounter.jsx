// import { motion, useAnimation } from 'framer-motion'
import {
  animate, motion, useInView,useMotionValue, useTransform, 
} from 'motion/react'
import { useEffect,useRef } from 'react'
import styled from 'styled-components'

const Layout = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-s);
  gap: var(--space-xs);

  & >.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > .number {
      font-size: var(--font-size-1xl);
      color: var(--color-tertiary);
      display: flex;
      line-height: 1;
    }

    & .title {
      font-size: var(--font-size-large);
      color: var(--color-primary);
      line-height: 1;
    }
  }

 
`

export const AnimatedCounter = ({
  endNumber, 
  title,
  duration = 1, 
  prefix,
  icon,
  marginBottom = -300, 
}) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: `0px 0px ${marginBottom}px 0px` })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, endNumber, { duration })
      return () => controls.stop()
    }
  }, [isInView, count])

  return (
    <Layout ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {icon && <div className="icon">{icon}</div>}
      <div className="content">
        <div className="number">
          {prefix && <span>{prefix}</span>}
          <motion.div>{rounded}</motion.div>
        </div>
        <div className="title">{title}</div>
      </div>
    </Layout>
  )
}
