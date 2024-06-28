// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const destinationBlock=42;
    if(location>destinationBlock){
        return location-destinationBlock;
    }
    else{
        return destinationBlock-location;
    }
    
}
// const blockDifference=distanceFromHqInBlocks(location);
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(location,blockDestination){
    if(location>blockDestination){
        return (location-blockDestination)*264;
    }
    else{
        return (blockDestination-location)*264;
    }
    
}

function calculatesFarePrice(location,blockDestination){
    let feetDestination=distanceTravelledInFeet(location,blockDestination);
    if(feetDestination<=400){
        return 0
        ;
    }
    else if(feetDestination>=400 && feetDestination<=2000){
return (feetDestination-400)*0.02;
    }
    else if(feetDestination>=2000 && feetDestination<=2500){
        return 25.0;
    }
    else{
        return 'cannot travel that far';
    }
}
