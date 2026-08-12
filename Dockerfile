#syntax=docker/dockerfile:1.4
FROM node:26.6.0-slim@sha256:80f12a4030a00d8f78ebc4602bc3ef0f984932f498649b8ed3c0a740a6dff4a8 AS base

# Install dependencies only when needed
FROM base AS deps
ARG NEXT_PUBLIC_SENTRY_DSN

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm \
  npm ci

FROM base as dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Playwright (e2e tests) and the Storybook vitest addon both need real browsers.
# Only install the OS-level dependencies here (fast, ~seconds) - the browser
# binaries themselves (~500MB) are downloaded by the devcontainer's
# postCreateCommand instead, in the background, so they don't slow down every
# image build or block time-to-interactivity when the container starts.
RUN npx playwright install-deps chromium firefox

# Rebuild the source code only when needed
FROM base AS builder

ARG NEXT_PUBLIC_SENTRY_DSN

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner

ARG NEXT_PUBLIC_SENTRY_DSN

WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
