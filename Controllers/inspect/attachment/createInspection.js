const { Attachment, Asset, History, Sequelize } = require("../../../models");

const createAttachment = async (req, res) => {
  const { inspector, information, status,statusCode } = req.body;
  const files = req.files;
  const { id, code } = req.params;
  const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  const filename = files.map((file) => {
    return file.filename;
  });
  const data = {
    asset_code: code,
    attachmentId: id,
    inspector: inspector,
    information: information,
    attachments: filename,
    status : status
  };
  try {
    const assets = await Asset.findOne({
      where: {
        id: id,
      },
    });
    const existingInspection = await History.findOne({
      where: {
        attachmentId: id,
        inspection_date: {
          [Sequelize.Op.gt]: new Date(),
        },
      },
    });
    if (!assets) {
      return res.status(404).json({
        message: "Asset not found",
      });
    }

    if (!information || !inspector || files.length < 0) {
      return res.status(406).json({
        message: `field can't be empty`,
      });
    }
    if (existingInspection) {
      return res
        .status(408)
        .json({
          message: "The inspection has been carried out, please wait one week",
        });
    } else {
      await Attachment.create(data);
      await History.create({
        name : assets.name,
        asset_code: assets.asset_code,
        status: status,
        inspection_date: date,
        statusCode : statusCode,
        attachmentId: id,
        information : information
      });
      res.json({
        message: "Inspection has been created",
        file: files,
      });
    }
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

module.exports = createAttachment;
