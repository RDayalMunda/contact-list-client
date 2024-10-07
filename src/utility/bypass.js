export const hideSFValidator = function(){
    const anchorTag = document.querySelector('a[href="https://www.syncfusion.com/account/claim-license-key?pl=SmF2YVNjcmlwdA==&vs=Mjc=&utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information"]')
    console.log('to hide', anchorTag)
    anchorTag.parentNode.remove()
}