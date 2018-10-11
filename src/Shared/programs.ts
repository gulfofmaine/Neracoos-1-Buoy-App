/** 
 * Program related info
 */
import * as Sentry from '@sentry/browser'


interface Program {
    full_name: string
    slug: string
    url: string
}

const programs: Program[] = [
    {
        full_name: 'National Estuarine Research Reserve System',
        slug: 'NERRS',
        url: 'http://cdmo.baruch.sc.edu/'
    },
    {
        full_name: 'NOAA National Data Buoy Center',
        slug: 'NOAA',
        url: 'http://www.ndbc.noaa.gov/'
    },
    {
        full_name: 'NOAA National Data Buoy Center',
        slug: 'CMAN',
        url: 'http://www.ndbc.noaa.gov/'
    },
    {
        full_name: 'Costal Data Information Program',
        slug: 'CDIP',
        url: 'http://cdip.ucsd.edu/'
    },
    {
        full_name: 'NERACOOS',
        slug: 'NERACOOS',
        url: 'http://neracoos.org/'
    },
    {
        full_name: 'NERACOOS',
        slug: 'NERACOOS Long Is. Sound',
        url: 'http://neracoos.org/'
    },
    {
        full_name: 'NERACOOS',
        slug: 'URI',
        url: 'http://neracoos.org/'
    },
    {
        full_name: 'NERACOOS',
        slug: 'COOA',
        url: 'http://neracoos.org/'
    },
    {
        full_name: 'University of New Hampshire Ocean Process Analysis Laboratory',
        slug: 'UNH Buoy',
        url: 'http://www.opal.sr.unh.edu/'
    },
    {
        full_name: 'SmartAtlantic Alliance',
        slug: 'SmartAtlantic',
        url: 'http://www.smartatlantic.ca/'
    },
    {
        full_name: 'SmartBay',
        slug: 'SmartBay',
        url: 'http://www.smartatlantic.ca/PlacentiaBay/'
    }
]

export function getProgram(slug: string): Program {
    const program = programs.filter((p) => p.slug === slug)[0]

    if (program !== undefined) {
        return program
    }

    Sentry.captureMessage('Unknown program: ' + slug)

    return {
        full_name: slug,
        slug,
        url: ''
    }
}
