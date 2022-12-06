
// wind direction degrees converter

export const windDirection = (windDegree: number): string => {

    if (windDegree > 11.25 && windDegree <= 33.75) {
        return 'North North East';
    }
    else if (windDegree > 33.75 && windDegree <= 56.25) {
        return 'North East';
    }
    else if (windDegree > 56.25 && windDegree <= 78.75) {
        return 'East North East';
    }
    else if (windDegree > 78.75 && windDegree <= 101.25) {
        return 'East';
    }
    else if (windDegree > 101.25 && windDegree <= 123.75) {
        return 'East South East';
    }
    else if (windDegree > 123.75 && windDegree <= 146.25) {
        return 'South East';
    }
    else if (windDegree > 146.25 && windDegree <= 168.75) {
        return 'South South East';
    }
    else if (windDegree > 168.75 && windDegree <= 191.25) {
        return 'South';
    }
    else if (windDegree > 191.25 && windDegree <= 213.75) {
        return 'South South West';
    }
    else if (windDegree > 213.75 && windDegree <= 236.25) {
        return 'South West';
    }
    else if (windDegree > 236.25 && windDegree <= 258.75) {
        return 'West South West';
    }
    else if (windDegree > 258.75 && windDegree <= 281.25) {
        return 'West';
    }
    else if (windDegree > 281.25 && windDegree <= 303.75) {
        return 'West North West';
    }
    else if (windDegree > 303.75 && windDegree <= 326.25) {
        return 'North West';
    }
    else if (windDegree > 326.25 && windDegree <= 348.75) {
        return 'North North West';        
    }
    else if (windDegree > 348.75 && windDegree <= 360) {
        return 'North';
    }
    else if (windDegree >= 0 && windDegree <= 11.25) {
        return 'North';
    }
    else {
        return 'Unclear';
    }
}