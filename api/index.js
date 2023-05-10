//                     ,,ggddY888Ybbgg,,
//                 ,agd8""'   .d8888888888bga,
//             ,gdP""'     .d88888888888888888g,
//           ,dP"        ,d888888888888888888888b,
//         ,dP"         ,8888888888888888888888888b,
//        ,8"          ,8888888P"""88888888888888888,
//       ,8'           I888888I    )88888888888888888,
//      ,8'            `8888888booo8888888888888888888,
//      d'              `88888888888888888888888888888b
//      8                `"8888888888888888888888888888
//      8                  `"88888888888888888888888888
//      8                      `"8888888888888888888888
//      Y,                        `8888888888888888888P
//      `8,                         `88888888888888888'
//       `8,              .oo.       `888888888888888'
//        `8a             8888        88888888888888'
//         `Yba           `""'       ,888888888888P'
//           "Yba                   ,88888888888'
//             `"Yba,             ,8888888888P"'                
//                `"Y8baa,      ,d88888888P"'
//                    ``""YYba8888P888"'
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      #                                      #                                                    #                                   #                               #                      #               #                                      #                                  #                                            #    #
//      #   ##### ####   ####                  #                                                #                                       #            #                  #   #   #              #   ###         #                                      #                              #                                                     #
//  ##  #     #   #   #  #   #       ##   ##   # #  #  #  ##  # #   ##     # #  # #  ##    ### #### #  ###  ##     # #   ##  # #  ##    #  ##  # #  ####  ##        ##  #   #   #  ##   # #  ###  #     ##   ###  ##   ##     ##   ##   # #  #   ##   #  ##     # #  # #  ##    ### #### #  ###  ##     # #   ##  # #  ##    # # # #  #  ###  ##
// #  # #     #   #    # #    #     #  # #     ## # #  # #  # ## #    #    ## # ###    #  #     #   # #       #    ## # #  # ### #  #   # #  # ## #  #   #  #      #  # #   #   #    #  ### #  # #     #  # #  # #  # #  #   #  # #     ## ## #    #  #    #    ## # ###    #  #     #   # #       #    ## # #  # ### #  #   ### ## # # #  # #  #
// #### #     #   #    # #    #     #### ##    #  # #  # #### #  #  ###    #  # #    ###  #     #   # #     ###    #  # #### #   #  #   # #### #  #  #   #  #      #### #   #####  ###  #   #  # #     #  # #  # #### #  #   #### ##    #  #  #  ###  #  ###    #  # #    ###  #     #   # #     ###    #  # #### #   #  #   #   #  # # #  # #  #
// #    #     #   #    # #    #     #     ##   #  # #  # #    #  # #  #    #  # #   #  #  #     #   # #    #  #    #  # #    #   #  #   # #    #  #  #   #  #      #    #   #   # #  #  #   #  # #     #  # #  # #    #  #   #     ##   #  #  # #  #  # #  #    #  # #   #  #  #     #   # #    #  #    #  # #    #   #  #   #   #  # # #  # #  #
// #    #     #   #   #  #   #      #      #   #  # # ## #    #  # #  #    #  # #   #  #  #     #   # #    #  #    #  # #    #   #  #   # #    #  #  #   #  #  #   #    #   #   # #  #  #   # ##  #    #  # # ## #    #  #   #      #   #  #  # #  #  # #  #    #  # #   #  #  #     #   # #    #  #    #  # #    #   #  #   #   #  # # # ## #  #
//  ### #     #   ####   ####        ### ##    ###   # #  ### #  #  ## #   ###  #    ## #  ###   ## #  ###  ## #   ###   ### #    ##    #  ### #  #   ##  ##   #    ### #   #   #  ## # #    # #   ###  ##   # #  ###  ##     ### ##    #  #  #  ## # #  ## #   ###  #    ## #  ###   ## #  ###  ## #   ###   ### #    ##    #   ###  #  # #  ##
//                                                                         #                                       #                                           #                                                                                                #                                       #                        #
//                                                                         #                                       #                                          #                                                                                                 #                                       #                        #
//

require('dotenv').config()
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { PORT } = process.env

console.log('starting...')
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      setTimeout(() => {
        process.stdout.write('\u001b[1A\u001b[2K') //decoracion profesional o eso quiero creer u-u
        console.log(`successful start: listening in port: ${PORT}`)
      }, 300)
    })
  })
  .catch((error) => console.log(`Error: ${error.message}`))
