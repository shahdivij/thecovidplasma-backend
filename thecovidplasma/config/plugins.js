module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAVWWUKVF3UN3NA2F7',
        secretAccessKey: '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',
        region: 'ap-south-1',
        params: {
          Bucket: 'thecovidplasma',
        },
      },
    },
  });